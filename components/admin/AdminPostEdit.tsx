import { Input, message, Select } from "antd";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiSave } from "react-icons/bi";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminLeftTabsHeader from "../../components/admin/AdminSidebar";
import ImageUpload from "../../components/common/ImageUpload";
import { database, getNowTimeStamp } from "../../firebase.config";
import "../../node_modules/react-quill/dist/quill.snow.css";
import MainHead from "../common/MainHead";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function AdminPostEdit({
  post,
  headerActions,
  orgTags,
  orgCategories,
}) {
  const [postTitle, setPostTitle] = useState<string>();
  const [postSubtitle, setPostSubtitle] = useState<string>();
  const [postCategory, setPostCategory] = useState<string>();
  const [postTags, setPostTags] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string>();
  const [postContent, setPostContent] = useState<string>();

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (post) {
      setPostTitle(post.ti);
      setPostContent(post.ct);
      setPostSubtitle(post.su);
      setImageUrl(post.fi);

      setPostCategory(post.cat);
      setPostTags(post.tag);
    }
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "code"],
      ["clean"],
    ],
  };

  const handleCreateNewPost = async (action) => {
    const _postData = {
      ti: postTitle,
      ct: postContent,
      fi: imageUrl,
      cat: postCategory ? postCategory : [],
      tag: postTags ? postTags : [],
      po: post.po ? post.po : getNowTimeStamp(),
      up: getNowTimeStamp(),
    };
    switch (action) {
      case "create_post": {
        try {
          console.log({ _postData });
          const _postRef = collection(database, "posts");
          const postDoc = await addDoc(_postRef, _postData);
          message.success("Post added successfully");
          router.push(`/admin/posts/edit/${postDoc?.id}`);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        break;
      }
      case "update_post": {
        try {
          const _postRef = doc(database, `posts/${post?.id}`);
          const postDoc = await updateDoc(_postRef, _postData);
          message.success("Post added successfully");
          router.push(`/admin/posts/edit/${post?.id}`);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        break;
      }
      case "delete_post": {
        console.log({ post });
        try {
          const _postRef = doc(database, `posts/${post?.id}`);
          const postDoc = await deleteDoc(_postRef);
          message.success("Post deleted successfully");
          router.push(`/admin/posts`);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        break;
      }
    }
  };

  return (
    <div>
      <MainHead />

      <main className=" ml-20 px-3 mt-20">
        <h1 className=" text-2xl font-bold">വാർത്തകൾ </h1>
        <h3 className=" text-lg">വാർത്തകൾ ഇവിടെ ആഡ് ചെയ്യാം </h3>

        <form onSubmit={handleSubmit} className=" flex flex-col gap-4 mt-5">
          <Input
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Post title"
            showCount
            maxLength={120}
            required
            minLength={10}
          />
          <Input
            value={postSubtitle}
            onChange={(e) => setPostSubtitle(e.target.value)}
            placeholder="Post subtitle"
            showCount
            maxLength={100}
            minLength={10}
          />
          <ReactQuill
            value={postContent}
            onChange={setPostContent}
            theme="snow"
            modules={modules}
            style={{ height: 500 }}
          />

          <div className="flex flex-col mt-10">
            <span className=" font-bold">Featured Image:</span>
            <ImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
          </div>

          <span className=" font-bold">Categories:</span>
          <Select
            mode="tags"
            value={postTags}
            onChange={setPostTags}
            allowClear
            style={{ width: "100%" }}
            placeholder="Post Categories"
            options={orgCategories}
          />
          <span className=" font-bold">Tags:</span>
          <Select
            mode="tags"
            value={postCategory}
            onChange={setPostCategory}
            allowClear
            style={{ width: "100%" }}
            placeholder="Post Tags"
            options={orgTags}
          />
        </form>
      </main>

      <AdminHeader
        items={headerActions}
        handleCreateNewPost={handleCreateNewPost}
      />

      <AdminLeftTabsHeader />
    </div>
  );
}
