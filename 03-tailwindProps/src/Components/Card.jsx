// import React from "react";
console.log("Card component rendered");

// Props ("properties") are the data a parent component passes down to a child.
// They let us reuse the same component with different values each time.
// Here we destructure `channel` straight out of the props object, so instead of
// writing props.channel we can just use `channel` below.
function cards({channel}) {

  // props are read-only: the child receives them but should never change them.
  // console.log("props", props)   // the full props object
  // console.log(channel)          // just the channel value we pulled out

  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          {/* {channel} renders whatever value the parent passed for this prop */}
          <h1 className="font-bold ">{channel}</h1>
          <h1>Price</h1>
        </div>
        <div className="flex  justify-between">
          <p>#345</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
  );
}

export default cards;
