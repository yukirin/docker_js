console.log(`innerHeight = ${window.innerHeight}`);

const observer = new MutationObserver((mutationRecords) => {
  console.log(mutationRecords);
});

observer.observe(document.getElementById("elem"), {
  childList: true,
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
});
