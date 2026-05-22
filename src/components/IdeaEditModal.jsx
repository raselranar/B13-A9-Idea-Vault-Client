"use client";
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  toast,
  useOverlayState,
} from "@heroui/react";
import { Edit } from "lucide-react";

const IdeaEditModal = ({ idea, onSaved }) => {
  const state = useOverlayState({ defaultOpen: false });

  const handleEditIdea = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title")?.toString().trim();
    const category = formData.get("category")?.toString().trim();
    const description = formData.get("description")?.toString().trim();

    if (!title || !category || !description) {
      toast.error("Please fill in all fields before saving.");
      return;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${idea._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, category, description }),
      },
    );

    if (!response.ok) {
      toast.error("Unable to update idea. Try again.");
      return;
    }

    toast.success("Idea updated successfully!");
    state.close();

    if (typeof onSaved === "function") {
      onSaved({ ...idea, title, category, description });
    }
  };

  return (
    <Modal>
      <Button
        onClick={() => state.setOpen(true)}
        variant="secondary"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all">
        <Edit className="w-4 h-4" />
        Edit
      </Button>

      <Modal.Backdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-center text-lg font-bold">
                Edit Idea
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default" className="p-4 rounded-3xl shadow-sm">
                <Form onSubmit={handleEditIdea} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      type="text"
                      id="title"
                      name="title"
                      required
                      defaultValue={idea?.title}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      type="text"
                      id="category"
                      name="category"
                      required
                      defaultValue={idea?.category}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <TextArea
                      id="description"
                      name="description"
                      rows={4}
                      required
                      defaultValue={idea?.description}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <Modal.Footer className="flex flex-col sm:flex-row sm:justify-end gap-3">
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

export default IdeaEditModal;
