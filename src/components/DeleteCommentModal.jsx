"use client";
import { Button, Form, Modal, Surface, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteCommentModal = ({ id, commentId }) => {
  const router = useRouter();
  const handleDeleteComment = () => {
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}/comments/${commentId}`,
      {
        method: "DELETE",
      },
    )
      .then((response) => response.json())
      .then((data) => {
        toast.success("Comment deleted successfully!");
        router.refresh();
      });
  };
  return (
    <Modal>
      <Button
        variant="secondary"
        className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-all flex items-center gap-1">
        Delete
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-center text-xl">
                Delete Comment
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <p className="text-lg text-gray-700">
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
