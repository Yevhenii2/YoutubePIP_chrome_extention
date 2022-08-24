const button = createElementFromHTML(`
  <button
    class="ytp-button pip-button"
    data-tooltip-target-id="ytp-autonav-toggle-button"
    style=""
    aria-label="Автовоспроизведение включено"
    title="Автовоспроизведение включено"
  >
    <svg
      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  css-w2bhrx"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 36 36"
      data-testid="PictureInPictureIcon"
      aria-label="fontSize medium"
      fill="#fff"
    >
      <path d="M 23 11 h -8 v 6 h 8 V 11 z m 2 -4 H 7 c -1.1 0 -2 0.9 -2 2 v 14 c 0 1.1 0.9 1.98 2 1.98 h 18 c 1.1 0 2 -0.88 2 -1.98 V 9 c 0 -1.1 -0.9 -2 -2 -2 z m 0 16.01 H 7 V 8.98 h 18 v 14.03 z"></path>
    </svg>
  </button>`);

let prevURL = '';

const interval = setInterval(() => {
  if (prevURL !== window.location.href) {
    prevURL = window.location.href;

    if (
      document.querySelector('.pip-button') &&
      !'pictureInPictureEnabled' in document
    )
      return;
    const buttonsContainer = document.querySelector('.ytp-right-controls');
    const videoTag = document.querySelector('.video-stream.html5-main-video');

    button.addEventListener('click', () => {
      videoTag.requestPictureInPicture().catch(console.log);
    });
    buttonsContainer.prepend(button);
  }
}, 1000);

function createElementFromHTML(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}
