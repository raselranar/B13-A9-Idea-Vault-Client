"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Form,
  Modal,
  Surface,
  toast,
  useOverlayState,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteCommentModal = ({ id, commentId }) => {
  const router = useRouter();
  // modal state
  const state = useOverlayState({
    defaultOpen: false,
    onOpenChange: (isOpen) => console.log(isOpen),
  });

  const handleDeleteComment = async () => {
    const {
      data: { token },
    } = await authClient.token();
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}/comments/${commentId}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.error) return toast.danger(data.error);
        state.close();
        toast.success("Comment deleted successfully!");

        router.refresh();
      });
  };
  return (
    <Modal>
      <Button
        onClick={state.setOpen}
        variant="secondary"
        className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-all flex items-center gap-1">
        Delete
      </Button>
      <Modal.Backdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md dark:bg-slate-900">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-center text-xl dark:text-slate-50">
                Delete Comment
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <p className="text-lg text-gray-700 dark:text-slate-300">
                Permanently delete this comment?
              </p>
            </Modal.Body>
            <Modal.Footer className="flex justify-end gap-3">
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button onClick={handleDeleteComment} color="danger">
                Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};
export default DeleteCommentModal;
