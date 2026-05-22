"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Modal, Surface, toast, useOverlayState } from "@heroui/react";
import { Trash2 } from "lucide-react";

const IdeaDeleteModal = ({ idea, onDeleted }) => {
  const state = useOverlayState({ defaultOpen: false });

  const handleDeleteIdea = async () => {
    // get token
    const {
      data: { token },
    } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${idea._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );

    if (!res.ok) {
      toast.danger("Unable to delete idea. Try again.");
      return;
    }

    toast.success("Idea deleted successfully!");
    state.close();

    onDeleted(idea._id);
  };

  return (
    <Modal>
      <Button
        onClick={() => state.setOpen(true)}
        variant="secondary"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-all">
        <Trash2 className="w-4 h-4" />
        Delete
      </Button>

      <Modal.Backdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md dark:bg-slate-900">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-center text-xl font-bold dark:text-slate-50">
                Delete Idea
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default" className="bg-transparent">
                <p className="text-gray-700 dark:text-slate-300 text-base">
                  Are you sure you want to permanently delete this idea?
                </p>
              </Surface>
            </Modal.Body>
            <Modal.Footer className="flex justify-end gap-3 p-6">
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button onClick={handleDeleteIdea} color="danger">
                Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default IdeaDeleteModal;
