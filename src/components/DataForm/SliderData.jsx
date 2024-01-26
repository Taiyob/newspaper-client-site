import axiosSecure from "../../api/url";
import Swal from "sweetalert2";

const SliderData = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const description = form.description.value;
    const slideData = { image, title, description };
    const sliders = await axiosSecure.post("/slider-data-generate", slideData);
    console.log(sliders?.data);
    form.reset();
    if (sliders?.data?.acknowledged === true) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h1 className="text-center text-black sm:mt-2 md:mt-10 lg:mt-20">
        Make Slider Content
      </h1>
      <div className="flex items-center justify-center text-center dark:bg-gray-900 dark:text-gray-100">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100"
        >
          <label htmlFor="image" className="self-start text-xs font-semibold">
            Image Link
          </label>
          <input
            id="image"
            name="image"
            type="text"
            className="flex items-center h-12 px-4 mt-2 rounded border border-black focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
          />
          <label
            htmlFor="title"
            className="self-start mt-3 text-xs font-semibold"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="flex items-center h-12 px-4 mt-2 rounded border border-black focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
          />
          <label
            htmlFor="description"
            className="self-start mt-3 text-xs font-semibold"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            type="text"
            className="flex items-center h-32 px-4 mt-2 rounded border border-black focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
          />
          <button
            type="submit"
            className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-gray-200"
          >
            create
          </button>
        </form>
      </div>
    </div>
  );
};

export default SliderData;
