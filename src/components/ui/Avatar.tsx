const Avatar = ({ src }: { src: string }) => {
  return (
    <div className=" w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-full border-red-500">
      <img src={src} alt="Avatar" className="w-full h-full object-cover text-white text-sm" />
    </div>
  );
};

export default Avatar;
