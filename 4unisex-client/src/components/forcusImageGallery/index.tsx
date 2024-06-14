import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleZoomProduct } from "@/store/reducers/product.reducer";
import { RootState } from "@/store";

function FocusImageGallery() {
  const showModal = useSelector(
    (state: RootState) => state.productReducer.imgZoomProduct
  );
  const dataImg = useSelector((state: RootState) => state.imgFocus);
  const [indexImg, setIndexImg] = useState(0);
  const modalRef = useRef(null);

  const listImage = [
    {
      id: 1,
      url: "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp",
    },
    {
      id: 2,
      url: "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep-2.jpg.webp",
    },
    {
      id: 3,
      url: "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep-2.jpg.webp",
    },
    {
      id: 4,
      url: "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep-4.jpg.webp",
    },
    {
      id: 5,
      url: "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep-5.jpg.webp",
    },
  ];

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleZoomProduct());
  };

  const nextClick = () => {
    if (indexImg === dataImg.length - 1) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  };

  const previosClick = () => {
    if (indexImg === 0) {
      setIndexImg(dataImg.length - 1);
    } else {
      setIndexImg(indexImg - 1);
    }
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      modalRef.current &&
      !(modalRef.current as HTMLElement).contains(e.target as Node)
    ) {
      closeModal();
    }
  };

  return (
    <div>
      {showModal && (
        <div className="modal" onClick={(e) => handleClickOutside(e)}>
          <div
            className="modal-content"
            style={{ backgroundImage: `url(${dataImg[indexImg].url})` }}
            ref={modalRef}
          >
            <span className="close" onClick={closeModal}>
              <IoClose />
            </span>
            <div className="modal-content-action">
              <button
                className="modal-content-action__button"
                onClick={nextClick}
              >
                <GrLinkPrevious />
              </button>
              <button
                className="modal-content-action__button"
                onClick={previosClick}
              >
                <GrLinkNext />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FocusImageGallery;
