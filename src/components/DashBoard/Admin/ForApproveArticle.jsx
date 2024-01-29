import Swal from "sweetalert2";
import axiosSecure from "../../../api/url";
import useForApproveArticle from "../../../hooks/useForApproveArticle";
import { BsPersonExclamation } from "react-icons/bs";

const ForApproveArticle = () => {
  const { data, isLoading, refetch } = useForApproveArticle();
  
  const handleApprove = (approveArticle) => {
    axiosSecure
      .patch(`/admin/article-approve/${approveArticle._id}`)
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${approveArticle.title} is approved now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leadi">Invoices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3">Title</th>
                <th className="p-3">Publisher</th>
                <th className="p-3">Tag</th>
                <th className="p-3">Description</th>
                <th className="p-3 text-right">Issue Date</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {!isLoading &&
                data?.data.map((approveArticle) => (
                  <tr
                    key={approveArticle._id}
                    className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                  >
                    <td className="p-3">
                      <p>{approveArticle.title}</p>
                    </td>
                    <td className="p-3">
                      <p>{approveArticle.publisher}</p>
                    </td>
                    <td className="p-3">
                      <p>{approveArticle.tags}</p>
                      {/* <p className="dark:text-gray-400">Friday</p> */}
                    </td>
                    <td className="p-3">
                      <p>{approveArticle.description}</p>
                      {/* <p className="dark:text-gray-400">Tuesday</p> */}
                    </td>
                    <td className="p-3">
                      <p>{approveArticle.time}</p>
                    </td>
                    <td className="p-3">
                      {approveArticle?.status === "approved" ? (
                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 text-black">
                          <span>Approved</span>
                        </span>
                      ) : (
                        <button
                          className="btn btn-lg p-4 bg-orange-300"
                          onClick={() => handleApprove(approveArticle)}
                        >
                          <BsPersonExclamation className="text-white text-xl"></BsPersonExclamation>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ForApproveArticle;
