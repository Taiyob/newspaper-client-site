import Lottie from "lottie-react";
import formFillup from "../../assets/animation/laptop.json";
import usePublisher from "../../hooks/usePublisher";
import { imageUpload } from "../../api/utils";
import axiosPublic from "../../api/uri";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddArticles = () => {
  const { data, isLoading } = usePublisher();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const publisher = form.publisher.value;
    const tags = form.tags.value;
    const time = form.time.value;
    const description = form.description.value;
    const image = form.image.files[0];
    form.reset();
    try {
      const imageData = await imageUpload(image);
      const articleInfo = {
        title: title,
        publisher: publisher,
        tags: tags,
        time: time,
        description: description,
        imageUrl: imageData?.data?.display_url,
        status: "pending",
      };
      const insertArticle = await axiosPublic.post("/add-article", articleInfo);
      if (insertArticle?.data?.acknowledged === true) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${title} has been added successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err.message}`,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <div className="flex items-center justify-center">
      <Helmet>
        <title>Add || Article</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-900 mt-10 flex-1">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new article
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Title of article"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="publisher"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Publisher
                </label>
                <select
                  name="publisher"
                  id="publisher"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                >
                  <option value="" disabled selected>
                    Select a publisher
                  </option>
                  {isLoading ? (
                    <option value="" disabled>
                      Loading...
                    </option>
                  ) : (
                    data?.data.map((publisher) => (
                      <option key={publisher._id} value={publisher.name}>
                        {publisher.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div>
                <label
                  htmlFor="tags"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tags
                </label>
                <select
                  id="tags"
                  name="tags"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="" disabled selected>
                    Select tags
                  </option>
                  <option value="sports">Sports</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="local">Local</option>
                  <option value="international">International</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Time
                </label>
                <input
                  type="date"
                  name="time"
                  id="time"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white btn bg-black rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add article
            </button>
          </form>
        </div>
      </section>
      <div className="mt-10 flex-1">
        <Lottie
          className="h-[800px]"
          animationData={formFillup}
          loop={true}
        ></Lottie>
      </div>
    </div>
  );
};

export default AddArticles;
