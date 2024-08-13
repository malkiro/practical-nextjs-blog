import StyledButton from "@/components/StyledButton";
import Image from "next/image";


export default async function Home() {
  // Fetch data
  const res = await fetch('https://fakestoreapiserver.reactbd.com/products');
  const products = await res.json();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="max-w-[500px] w-full md:w-[500px] mx-auto">
        <h1 className="my-3 text-center">example page</h1>
        <div className="flex flex-col gap-2">
          {products.map((product, idx) => (
            <div key={idx} className="border-[1px] border-[#eee] bg-[#fff]  rounded-[8px] overflow-hidden">
              {/* <Image src={product?.image} alt={product.title} width={500} height={300} /> */}
              <div className="w-full h-[500px] overflow-hidden">
                <img src={product?.image} alt={product.title} className="object-cover" />
              </div>
              <div className="px-[12px] pt-[20px] pb-[15px]">
                <div className="mb-1 font-bold text-[20px]">{product?.title}</div>
                <div>{product?.description}</div>
                <div className="mb-2 font-semibold text-[14px]">LKR {product?.price}</div>
              </div>

              <div className="flex gap-2 border-t-[1px] border-[#eee] py-[10px] px-[12px]">
                <StyledButton title="BUY NOW" dark />
                <StyledButton title="LEARN MORE" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
