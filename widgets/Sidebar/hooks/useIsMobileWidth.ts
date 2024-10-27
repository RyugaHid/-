const WINDOW_WIDTH_PIONT = 600

const useIsMobileWidth = () => {
  const windowWidth = window.innerWidth

  return windowWidth <= WINDOW_WIDTH_PIONT
}

export default useIsMobileWidth
