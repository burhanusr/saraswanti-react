import { Badge } from "./Badge";
import { formatRupiah } from "../utils/formatCurrency";
import { Post } from "../api/fetchData";
import { Category } from "./Page";

interface MyComponentProps {
  data: Post[];
  categories: Category[];
}

export default function Table({ data, categories }: MyComponentProps) {
  const getCategoryTitle = (type: number) => {
    const foundCategory = categories.find((cat) => cat.id === type);
    return foundCategory ? foundCategory.title : "Unknown";
  };

  return (
    <>
      <div className="mt-6 hidden md:flex md:flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                      Attachment
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {data?.map((post) => (
                    <tr key={post.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {post.name}
                      </td>
                      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-900 lg:table-cell">
                        {getCategoryTitle(post.type)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                        {formatRupiah(post.price)}
                      </td>
                      <td className="hidden whitespace-nowrap px-3 py-4 text-center text-sm text-gray-900 lg:table-cell">
                        {post.discount > 0 ? (
                          <Badge>Ada</Badge>
                        ) : (
                          <Badge variant="secondary">Tidak</Badge>
                        )}
                        {post.discount > 1000000 && (
                          <Badge variant="warning">Approval Needed</Badge>
                        )}
                      </td>
                      <td className="hidden whitespace-nowrap px-3 py-4 text-center text-sm text-gray-900 lg:table-cell">
                        {post.attachment === 1 ? (
                          <Badge>Ada</Badge>
                        ) : (
                          <Badge variant="secondary">Tidak</Badge>
                        )}
                      </td>
                      <td className="hidden whitespace-nowrap px-3 py-4 text-center text-sm text-gray-900 sm:table-cell">
                        {post.status === 1 ? (
                          <Badge>Approved</Badge>
                        ) : (
                          <Badge variant="secondary">Unapproved</Badge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Card view up to the 'md' breakpoint */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
        {data?.map((post) => (
          <div
            key={post.id}
            className="relative flex items-center space-x-3 rounded-lg bg-white px-6 py-5 shadow ring-1 ring-black ring-opacity-5"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center space-x-3">
                <p className="truncate text-sm font-medium text-gray-900">
                  {post.name}
                </p>
              </div>
              <p className="mt-1 truncate text-sm text-gray-700">
                {getCategoryTitle(post.type)}
              </p>
              <p className="mt-1 truncate text-sm text-gray-500">
                {formatRupiah(post.price)}
              </p>
            </div>
            <div className="text-end">
              <div>
                {post.discount > 0 ? (
                  <Badge>Discount</Badge>
                ) : (
                  <Badge variant="secondary">No Discount</Badge>
                )}
                {post.discount > 1000000 && (
                  <Badge variant="warning">Approval Needed</Badge>
                )}
              </div>
              <div>
                {post.attachment === 1 ? (
                  <Badge>Attachment</Badge>
                ) : (
                  <Badge variant="secondary">No Attachment</Badge>
                )}
              </div>
              <div>
                {post.status === 1 ? (
                  <Badge>Approved</Badge>
                ) : (
                  <Badge variant="secondary">Unapproved</Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
