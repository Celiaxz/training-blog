import BlogItem from "./BlogItem";

const myData = [
  {
    id: 1,
    title: "My blog 1",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "My blog 2",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 3,
    title: "My blog 3",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    id: 4,
    title: "My blog 4",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
];

const Blog = () => {
  return (
    <div>
      <header className="header">
        <div>
          <svg
            width="100"
            height="91"
            viewBox="0 0 100 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.91317 65.481C10.5514 55.7372 16.1349 45.966 21.8006 36.2222C26.3714 28.3944 36.2794 28.4217 40.8776 36.2496C46.5432 45.966 52.1814 55.7372 57.765 65.5083C61.4052 71.9129 58.504 79.5492 51.8256 81.5199C49.9918 82.0673 48.377 81.903 46.7348 80.6167C42.1366 77.0312 37.3742 73.5825 32.7213 69.997C31.6265 69.1759 30.9148 69.2033 29.8747 70.0518C25.2218 73.6099 20.4594 77.0585 15.8339 80.6988C14.2738 81.903 12.741 82.0946 10.9893 81.602C6.47327 80.4524 3.29832 76.1006 3.32569 71.1192C3.21621 69.0664 3.90047 67.2326 4.91317 65.481Z"
              fill="#009BC0"
            />
            <path
              d="M56.5059 9.50897C63.02 20.7307 69.6162 31.8978 75.9387 43.2016C80.4821 51.3853 85.3814 59.3774 89.8975 67.5611C92.9356 73.0625 90.4997 79.2755 85.1625 81.5473C80.6738 83.4632 74.8166 81.383 72.3806 77.168C65.5654 65.3167 58.6134 53.5749 51.853 41.6689C47.1179 33.321 42.246 25.0826 37.5384 16.7347C33.8981 10.1932 39.8101 1.35265 46.7621 2.91275C51.9077 2.06428 54.2889 5.73189 56.5059 9.50897Z"
              fill="#1B3854"
            />
          </svg>
        </div>
        <div>
          <ul className="navs">
            <li>
              <a href="/">HOME</a>
            </li>
            <li className="active">
              <a href="/blog">BLOG</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </header>

      <BlogItem myData={myData} />
      <div className="roundbutton" onClick={addblog}>
        <i className="fa fa-plus icon" aria-hidden="true"></i>
      </div>
    </div>
  );
};

const addblog = () => {
  alert("hello i'm an alert function");
};
export default Blog;
