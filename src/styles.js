import { css } from 'lit';

export const styles = [
  css`
    .container {
      text-align: center;
      padding: 0px 10px;
      font-family: Georgia, 'Times New Roman', Times, serif;
    }

    .ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .card {
      display: flex;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      width: 350px;
      height: 150px;
      border-radius: 5px;
      margin: 15px;
    }

    .image-container {
      width: 33%;
    }

    img {
      height: 100%;
      border-radius: 5px 5px 0 0;
    }

    .desc-container {
      text-align: left;
      width: 66%;
      padding: 2%;
    }

    .heading {
      font-size: 18px;
    }

    span {
      font-size: 11px;
    }

    p {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  `,
];
