import { auth } from "@/lib/auth";
import { Avatar, Description, Label, ListBox } from "@heroui/react";
import { headers } from "next/headers";
const ShowUserComments = async ({ comments }) => {
  const session = await auth.api.getSession({ headers: await headers() });
  console.log(session);
  //   filter current users comments
  comments = comments?.filter(
    (comment) => comment.user === session?.user?.name,
  );
  console.log(comments);
  return (
    <div className="flex flex-col gap-2 ">
      {comments?.map((comment, i) => (
        <div
          key={comment.id || i}
          id={comment.id || i}
          className="px-4 py-2 shadow-sm dark:shadow-none rounded-xl bg-gray-100 dark:bg-slate-700 dark:text-white">
          {comment?.text}
        </div>
      ))}
    </div>
  );
};

export default ShowUserComments;

//           <Label>Fred</Label>
//           <Description>fred@heroui.com</Description>
//         </div>
//         <ListBox.ItemIndicator />
//       </ListBox.Item>
//       <ListBox.Item id="3" textValue="Martha">
//         <Avatar size="sm">
//           <Avatar.Image
//             alt="Martha"
//             src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg"
//           />
//           <Avatar.Fallback>M</Avatar.Fallback>
//         </Avatar>
//         <div className="flex flex-col">
//           <Label>Martha</Label>
//           <Description>martha@heroui.com</Description>
//         </div>
//         <ListBox.ItemIndicator />
//       </ListBox.Item>
//     </ListBox>
//   );
// };

// export default ShowUserComments;
