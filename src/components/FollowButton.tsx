"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
// import { toggleFollow } from "@/actions/user.action";

const handleFollow = ()=>{}

const FollowButton = ({ userId }: { userId: string }) => {
     const [isLoading, setIsLoading] = useState(false);

    return (
       <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
      disabled={isLoading}
      className="w-20"
    >Follow</Button>
  );
};

export default FollowButton;
