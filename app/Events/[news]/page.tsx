const page = ({ params }: { params: any }) => {
  const { news } = params;
  console.log("news", news);

  return (
    <div className="bg-white pb-20   ">
      <div className="bg-white mx-5 rounded-2xl pb-5 " >
        <h1 className="font-bold text-3xl px-5 font-gilroy text-center leading-tight py-2">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <div className="w-full overflow-hidden rounded-2xl">
          <img
            className="h-full w-full object-cover px-5 rounded-2xl"
            src="/image/712.jpg"
            alt="news"
          />
        </div>
        <p className="text-justify text-sm leading-tight w-full px-5 pt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga facilis
          tempora veniam voluptatum. Minus hic quo molestiae ut optio explicabo
          quae neque. Veniam assumenda, dignissimos delectus eius unde quaerat
          at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          ullam quasi nulla, aperiam culpa nemo id consequatur magni
          perspiciatis tempora, corrupti quaerat labore totam, corporis at
          repellat! Quo, quasi illum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quidem. Quisquam, quidem. Quisquam,
          quidem.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse,
          consectetur minus velit sit sed magnam quia odio officia eos soluta
          amet voluptas recusandae reprehenderit sequi ipsa, mollitia tempora
          pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magnam, laboriosam obcaecati rerum quasi ratione iure, sequi mollitia
          dicta similique eaque rem ipsa adipisci impedit, ducimus iusto sunt
          temporibus. Ipsum, impedit? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam, reprehenderit. Obcaecati facilis quis quasi,
          culpa qui inventore quae velit, vero consectetur distinctio, mollitia
          alias cum voluptates quibusdam. Odio, repellat id.
        </p>
      </div>
    </div>
  );
};

export default page;
