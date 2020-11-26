$(document).ready(function () {
  if (screen.width > 450) {
    document.getElementById("viewport").setAttribute("content", "width=1200");
  }

  if (window.DeviceOrientationEvent) {
    window.addEventListener("orientationchange", function () {
      location.reload();
    });
  }
});
