import { ContainerFooter } from "./styles";

export const Footer = () => {
  //   function scrollToTop() {
  //     const scrollStep = -window.scrollY / (500 / 30);

  //     const scrollInterval = setInterval(() => {
  //       if (window.scrollY !== 0) {
  //         window.scrollTo(0, window.scrollY + scrollStep);
  //       } else {
  //         clearInterval(scrollInterval);
  //       }
  //     }, 15);
  //   }

  return (
    <ContainerFooter>
      <div>
        <p>SimbioMovies</p>
        <span>Todos os direitos reservados.</span>
        {/* <button onClick={scrollToTop}>^^</button> */}
      </div>
    </ContainerFooter>
  );
};
