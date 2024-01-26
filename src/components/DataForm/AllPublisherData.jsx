import Swal from "sweetalert2";
import axiosSecure from "../../api/url";
import { imageUpload } from "../../api/utils";

const AllPublisherData = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const pname = form.pname.value;
    const image = form.image.files[0];
    form.reset();
    try {
      const imageData = await imageUpload(image);
      //   console.log(imageData?.data?.display_url);
      const publisherInfo = {
        name: pname,
        imageUrl: imageData?.data?.display_url,
      };
      const insertData = await axiosSecure.post(
        "/add-publisher",
        publisherInfo
      );
      if (insertData?.data?.acknowledged === true) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${pname} has been added successfully`,
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
    <div>
      <h1 className="text-center text-black sm:mt-2 md:mt-10 lg:mt-20">
        Create Publishers
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
            type="file"
            className="flex items-center h-12 px-4 mt-2 rounded border focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
          />
          <label
            htmlFor="title"
            className="self-start mt-3 text-xs font-semibold"
          >
            Publisher Name
          </label>
          <input
            id="pname"
            name="pname"
            type="text"
            className="flex items-center h-12 px-4 mt-2 rounded border border-black focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
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

export default AllPublisherData;
