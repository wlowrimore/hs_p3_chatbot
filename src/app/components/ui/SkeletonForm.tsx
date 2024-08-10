import { Skeleton } from "@/components/ui/skeleton";

const SkeletonForm = () => {
  return (
    <section className="glow w-[21.5rem] xl:w-[30rem] h-screen p-8 border-[#64329e] border rounded-3xl flex flex-col items-center mx-auto">
      <div className="flex justify-center items-center pb-10 pt-4">
        <Skeleton className="rounded-full w-[8rem] h-[8rem] bg-purple-400/20" />
      </div>
      <div className="w-full flex flex-col">
        <form>
          <Skeleton className="w-full h-[2rem] py-4 mb-2 rounded-3xl bg-purple-400/20" />
          <article>
            <Skeleton className="w-full h-[2rem] rounded-3xl bg-purple-400/20" />
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
            <Skeleton className="w-[75%] h-[1rem] py-1 rounded-full bg-purple-400/20" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SkeletonForm;
