"use client";
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
const EditCommentModal = ({ id, commentId }) => {
  // edit comment handler
  const handleEditComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const commentText = formData.get("editCommentBox");
    console.log(commentId);
    // put to server
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}/comments/${commentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: commentText,
        }),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        toast.success("Comment edited successfully!");
        // refresh comments
        router.refresh();
      });
  };

  return (
    <Modal>
      <Button
        variant="secondary"
        className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-all flex items-center gap-1">
        Edit Comment
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-center text-lg">
                Edit Comment
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <Form
                  onSubmit={handleEditComment}
                  className="flex flex-col gap-4">
                  <TextArea
                    rows={3}
                    name="editCommentBox"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none mb-3"
                    placeholder="Share your thoughts on this idea..."
                  />
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit">Save Changes</Button>
                  </Modal.Footer>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};
export default EditCommentModal;
