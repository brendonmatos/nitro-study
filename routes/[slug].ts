export default defineEventHandler((event) => {
  console.log('generating page!!!');
  const date = new Date();
  const formattedDate = Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(date);
  return `<body>
    <h1>${event.context.params.slug} </h1>
    <p>Generated at ${formattedDate}</p>
  </body>`;
});
