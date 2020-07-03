function DescriptionCard(props) {
  return (
    <div className="w-full p-4 shadow-md rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <div className="grid grid-rows-3 grid-cols-6 grid-flow-col">
        <div className="row-span-1 col-span-2">
          <img
            alt={props.avataralt}
            src={props.avatar}
            style={{ maxHeight: "64px", maxWidth: "96px", margin: "auto" }}
          />
        </div>
        <div className="row-start-2 row-end-4 col-span-2">
          <p className="text-gray-800 text-xs pt-8">{props.extra}</p>
          <a
            href={props.previewlink}
            className="font-bold text-sm text-blue-700 hover:underline"
          >
            Preview
          </a>
        </div>
        <div className="row-span-1 col-start-3 col-end-7 pl-2">
          <p className="font-semibold text-lg">{props.title}</p>
          <p className="text-xs text-gray-800">{props.subtitle}</p>
        </div>
        <div className="row-start-2 row-end-4 col-start-3 col-end-7 pt-2 text-sm pl-2">
          <summary>{props.description}</summary>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;
