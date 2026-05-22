"use client";
import { authClient } from "@/lib/auth-client";
import {
  Input,
  Select,
  Button,
  Label,
  ListBox,
  TextArea,
  Form,
  TextField,
  toast,
} from "@heroui/react";

const categories = [
  "Tech",
  "Health",
  "AI",
  "Education",
  "E-commerce",
  "Environment",
  "Finance",
  "Social",
];

export default function AddIdeaPage() {
  const { data: session } = authClient.useSession();

  // add idea handler
  const handleAddIdea = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    // add user info to idea data
    userData.userId = session?.user?.id || "anonymous";
    userData.author = session?.user?.name || "Anonymous User";
    // add timestamp to idea data
    userData.date = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    // convert tags string to array
    userData.tags = userData.tags
      ? userData.tags.split(",").map((tag) => tag.trim())
      : [];

    console.log("Submitted Idea:", userData);
    // send data to server
    const {
      data: { token },
      error,
    } = await authClient.token();
    if (error) {
      console.error("Error fetching token:", error);
      toast.danger("Error fetching authentication token. Please try again.");
    }
    console.log(token);
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.acknowledged) {
          toast.danger("Error submitting idea. Please try again.");
          return;
        }
        toast.success("Idea submitted successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.danger("Error submitting idea. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl dark:text-white dark:text-slate-50 font-black text-gray-900 mb-4">
            Share Your Idea
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-300">
            Tell us about your innovative startup concept
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 border-2 border-orange-100 dark:border-slate-700">
          <Form className="space-y-6 flex flex-col" onSubmit={handleAddIdea}>
            {/* Idea Title */}
            <TextField isRequired name="title">
              <Label
                className="text-base dark:text-slate-200"
                htmlFor="IdeaTitle">
                Idea Title
              </Label>
              <Input
                id="IdeaTitle"
                placeholder="e.g., AI-Powered Personal Finance Assistant"
                variant="bordered"
                color="warning"
                className="dark:bg-slate-800 dark:text-white"
              />
            </TextField>

            {/* Short Description */}
            <TextField name="shortDescription" isRequired>
              <Label
                className="text-base dark:text-slate-200"
                htmlFor="ShortDescription">
                Short Description
              </Label>

              <TextArea
                required={true}
                id="ShortDescription"
                placeholder="Brief one-liner about your idea (max 150 characters)"
                variant="bordered"
                color="warning"
                rows={2}
                maxLength={150}
                description="Max 150 characters"
                className="dark:bg-slate-800 dark:text-white"
              />
            </TextField>
            {/* Detailed Description */}
            <TextField isRequired name="detailedDescription">
              <Label
                className="text-base dark:text-slate-200"
                htmlFor="DetailedDescription">
                Detailed Description
              </Label>
              <TextArea
                required={true}
                id="DetailedDescription"
                placeholder="Provide a comprehensive explanation of your idea..."
                variant="bordered"
                color="warning"
                rows={6}
                className="dark:bg-slate-800 dark:text-white"
              />
            </TextField>

            {/* Category + Tags */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                isRequired
                name="category"
                placeholder="Select Category"
                variant="bordered"
                color="warning"
                className="">
                <Label>Category</Label>
                <Select.Trigger className="w-full flex items-center justify-between dark:bg-slate-800 dark:text-white">
                  <Select.Value className="dark:text-white" />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox className="dark:bg-slate-800 dark:text-white">
                    {categories.map((name, i) => (
                      <ListBox.Item id={name} key={i} textValue={name}>
                        {name}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
              {/* Tags */}
              <div className="flex flex-col gap-2">
                <Label className="text-base dark:text-slate-200" htmlFor="tags">
                  Tags
                </Label>
                <Input
                  name="tags"
                  id="tags"
                  placeholder="e.g., mobile, AI, SaaS"
                  variant="bordered"
                  color="warning"
                  description="Comma separated"
                  className="dark:bg-slate-800 dark:text-white"
                />
              </div>
            </div>
            {/* Image URL */}
            <TextField isRequired name="imageUrl">
              <Label
                className="text-base dark:text-slate-200"
                htmlFor="ImageURL">
                Image URL
              </Label>
              <Input
                required={true}
                id="ImageURL"
                placeholder="https://example.com/image.jpg"
                type="url"
                variant="bordered"
                color="warning"
                className="dark:bg-slate-800 dark:text-white"
              />
            </TextField>
            {/* Budget + Target Audience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label
                  className="text-base dark:text-slate-200"
                  htmlFor="EstimatedBudget">
                  Estimated Budget
                </Label>
                <Input
                  name="budget"
                  id="EstimatedBudget"
                  placeholder="e.g., $50,000 - $100,000"
                  variant="bordered"
                  color="warning"
                  className="dark:bg-slate-800 dark:text-white"
                />
              </div>
              <TextField isRequired name="targetAudience">
                <Label
                  className="text-base dark:text-slate-200"
                  htmlFor="TargetAudience">
                  Target Audience
                </Label>
                <Input
                  name="targetAudience"
                  id="TargetAudience"
                  placeholder="e.g., Young professionals, Students"
                  variant="bordered"
                  color="warning"
                  className="dark:bg-slate-800 dark:text-white"
                />
              </TextField>
            </div>

            {/* Problem Statement */}
            <TextField isRequired name="problemStatement">
              <Label
                className="text-base dark:text-slate-200"
                htmlFor="ProblemStatement">
                Problem Statement
              </Label>
              <TextArea
                label="Problem Statement"
                placeholder="What problem does your idea solve? Who faces this problem?"
                variant="bordered"
                color="warning"
                rows={4}
                className="dark:bg-slate-800 dark:text-white"
              />
            </TextField>
            {/* Proposed Solution */}
            <TextField isRequired name="proposedSolution">
              <Label
                className="text-base dark:text-slate-200"
                htmlFor="ProposedSolution">
                Proposed Solution
              </Label>
              <TextArea
                label="Proposed Solution"
                placeholder="How does your idea solve the problem? What makes it unique?"
                variant="bordered"
                color="warning"
                rows={4}
                className="dark:bg-slate-800 dark:text-white"
              />
            </TextField>

            {/* Submit */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full py-6 rounded-xl bg-gradient text-white font-bold"
                size="lg">
                Submit Idea
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
