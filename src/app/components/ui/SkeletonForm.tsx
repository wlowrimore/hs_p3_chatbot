import { Skeleton } from "@/components/ui/skeleton";

const SkeletonForm = () => {
  return (
    <section className="glow w-full flex flex-col items-center justify-center xl:max-w-[30rem] p-8 border-[#64329e] border rounded-3xl">
      <div className="flex justify-center">
        <Skeleton className="rounded-full w-[8rem] h-[8rem] mb-6 bg-purple-400/20" />
      </div>
      <div className="w-full flex flex-col">
        <form>
          <Skeleton className="w-[20rem] flex flex-col justify-center py-24 mb-2 rounded-3xl bg-purple-400/20" />
          <article>
            <Skeleton className="w-full rounded-3xl bg-purple-400/20" />
          </article>
          <div className="my-6 w-full space-y-6">
            <div className="w-full flex flex-col gap-1">
              <Skeleton className="w-[5rem] h-[1rem] bg-purple-400/20 rounded-3xl" />
              <Skeleton className="w-full h-[1.5rem] px-2 py-1 rounded-3xl bg-purple-400/20" />
            </div>
            <div className="w-full flex flex-col gap-1">
              <Skeleton className="w-[5rem] h-[1rem] rounded-3xl bg-purple-400/20" />
              <Skeleton className="w-full h-[1.5rem] px-2 py-1 rounded-3xl bg-purple-400/20" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <Skeleton className="w-[5rem] h-[1rem] rounded-3xl bg-purple-400/20" />
            <Skeleton className="w-full h-[1.5rem] px-2 py-1 rounded-3xl bg-purple-400/20" />
          </div>
          <div className="flex justify-center my-4">
            <Skeleton className=" h-[1rem] py-1 rounded-full bg-purple-400/20" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SkeletonForm;
