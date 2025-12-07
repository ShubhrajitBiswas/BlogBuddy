import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();
  const { axios } = useAppContext();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [isLoadingComments, setIsLoadingComments] = useState(false);

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      if (data.success) {
        setData(data.blog);
      } else {
        toast.error(data.message || 'Blog not found');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to load blog';
      toast.error(errorMessage);
      console.error('Error fetching blog:', error);
    }
  };

  const fetchComments = async () => {
    setIsLoadingComments(true);
    try {
      const { data } = await axios.post("/api/blog/comments", { blogId: id });
      if (data.success) {
        setComments(data.comments || []);
      } else {
        setComments([]);
        console.error('Failed to fetch comments:', data.message);
      }
    } catch (error) {
      setComments([]);
      console.error('Error fetching comments:', error);
      // Only show error toast if it's not a network error (which might be temporary)
      if (error.response?.status !== 404) {
        // Silent fail for comments - don't disturb user experience
      }
    } finally {
      setIsLoadingComments(false);
    }
  };
  const addComment = async (e) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsSubmittingComment(true);
    try {
      const { data } = await axios.post("/api/blog/add-comment", {
        blog: id,
        name: name.trim(),
        content: content.trim(),
      });
      if (data.success) {
        toast.success(data.message);
        setName("");
        setContent("");
        // Refresh comments after adding
        await fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to add comment';
      toast.error(errorMessage);
      console.error('Error adding comment:', error);
    } finally {
      setIsSubmittingComment(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlogData();
      fetchComments();
    }
  }, [id]);

  return data ? (
    <div className="min-h-screen bg-white relative">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-40 -left-8 -right-8 z-0 opacity-60 w-auto h-auto max-w-none"
      />

      <div className="relative z-10">
        <Navbar />

        <div className="text-center mt-8 sm:mt-12 lg:mt-16 text-gray-600 px-4">
          <p className="text-primary py-2 sm:py-4 font-medium text-sm sm:text-base">
            Published on {Moment(data.createdAt).format("Do MMMM YYYY")}
          </p>
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold max-w-4xl mx-auto text-gray-800 px-4 leading-tight">
            {data.title}
          </h1>
          <h2 className="my-3 sm:my-5 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 px-4">
            {data.subTitle}
          </h2>
          <p className="inline-block py-1 px-4 rounded-full mb-4 sm:mb-6 border text-xs sm:text-sm border-primary/35 bg-primary/5 font-medium text-primary">
            Shubhrajit Biswas
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12">
          <img
            src={data.image}
            alt={data.title}
            className="w-full rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 shadow-lg"
          />

          <div
            className="rich-text max-w-3xl mx-auto prose prose-lg"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />

          {/* Comments Section */}
          <div className="mt-12 sm:mt-16 mb-8 sm:mb-12 max-w-3xl mx-auto">
            <p className="font-semibold mb-4 sm:mb-6 text-lg">
              Comments ({comments.length})
            </p>

            {isLoadingComments ? (
              <div className="flex items-center justify-center py-8">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 sm:gap-6">
                {comments.length > 0 ? (
                  comments.map((item, index) => (
                    <div
                      key={index}
                      className="relative bg-primary/5 border border-primary/10 max-w-xl p-4 sm:p-6 rounded-lg text-gray-600"
                    >
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <img src={assets.user_icon} alt="" className="w-5 sm:w-6" />
                        <p className="font-medium text-sm sm:text-base">
                          {item.name}
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm max-w-md ml-6 sm:ml-8 leading-relaxed">
                        {item.content}
                      </p>
                      <div className="absolute right-3 sm:right-4 bottom-3 flex items-center gap-2 text-xs text-gray-500">
                        {Moment(item.createdAt).fromNow()}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-8">No comments yet. Be the first to comment!</p>
                )}
              </div>
            )}
          </div>

          {/* Add comment section */}
          <div className="max-w-3xl mx-auto">
            <p className="font-semibold mb-4 sm:mb-6 text-lg">
              Add Your Comment
            </p>
            <form
              onSubmit={addComment}
              className="flex flex-col items-start gap-4 sm:gap-6 max-w-lg"
            >
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                required
                disabled={isSubmittingComment}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg outline-none focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="Comment"
                disabled={isSubmittingComment}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg outline-none focus:border-primary transition-colors h-32 sm:h-48 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
              <button
                type="submit"
                disabled={isSubmittingComment}
                className="bg-primary text-white rounded-lg p-3 sm:p-4 px-6 sm:px-8 hover:bg-primary/90 transition-colors cursor-pointer text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmittingComment ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>

          {/* Social media icons */}
          <div className="my-16 sm:my-24 max-w-3xl mx-auto">
            <p className="font-semibold my-4 sm:my-6 text-lg">
              Share this article on social media
            </p>
            <div className="flex gap-4">
              <img
                src={assets.facebook_icon}
                width={40}
                height={40}
                alt="Facebook"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src={assets.twitter_icon}
                width={40}
                height={40}
                alt="Twitter"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src={assets.googleplus_icon}
                width={40}
                height={40}
                alt="Google Plus"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Blog;
