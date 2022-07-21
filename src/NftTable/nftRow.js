import { LazyLoadImage } from "react-lazy-load-image-component";
import ethSvg from "../assets/eth-icon.svg";

function NftRow({ sale, token }) {
  const tokenName = token.name.split("#");

  return (
    <div className="nftRow">
      <div className="nftRow-image">
        <LazyLoadImage
          alt={token.name}
          height={100}
          src={token.image.url}
          width={100}
        />
      </div>
      <div className="nftRow-info">
        <div className="nftRow-info--top">
          <div className="nftRow-info--top_name">
            {tokenName[0]}
            <span className="nftRow-info--top_name__number">{`#${tokenName[1]}`}</span>
          </div>
          <div className="nftRow-info--top_price">
            <img src={ethSvg} className="nftRow-info--top__price__icon" />
            {Math.floor(sale.price.nativePrice.decimal * 100) / 100}
          </div>
        </div>
        <div className="nftRow-info--bottom">
          |<div className="nftRow-info--bottom_timestamp">{sale.transactionInfo.blockTimestamp}</div>
        </div>
      </div>
    </div>
  );
}

export default NftRow;
