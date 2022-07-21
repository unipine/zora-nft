function NftRow({ nft }) {
  return (
    <div className="nftRow">
      <div className="nftRow-image">
        image
      </div>
      <div className="nftRow-info">
        <div className="nftRow-top">
          <span className="nftRow-top_name">
            {nft.name}
          </span>
          <span className="nftRow-top_price">
            {nft.price}
          </span>
        </div>
        <div className="nftRow-bottom">
            {nft.time}
        </div>
      </div>
    </div>
  )
}

export default NftRow;