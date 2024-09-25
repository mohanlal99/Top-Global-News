import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import TextEditorMenuBar from "./TextEditorMenuBar";

type TextEditorProps = {
  initialContent: string;
  onChange: (content: string) => void;
};

export default function RichTextEditor({
  onChange,
  initialContent,
}: TextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[200px] p-1 cursor-text rounded-md border ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ",
      },
    },
    immediatelyRender: false,
  });

  return (
    <div>
      <TextEditorMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
