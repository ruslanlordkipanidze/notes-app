"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface BannerProps {
  documentId: Id<"documents">;
};

export const Banner = ({
  documentId
}: BannerProps) => {
  const router = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Видалення нотатки...",
      success: "Нотатку видалено!",
      error: "Не вдалося видалити нотатку."
    });

    router.push("/documents");
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
        loading: "Відновлення нотатки...",
        success: "Нотатку відновлено!",
        error: "Не вдалося відновити нотатку."
    });
  };

  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
      <p>
      Ця сторінка в корзині.
      </p>
      <Button
        size="sm"
        onClick={onRestore}
        variant="outline"
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
      >
        Відновити сторінку
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
        >
          Видалити назавжди
        </Button>
      </ConfirmModal>
    </div>
  )
}