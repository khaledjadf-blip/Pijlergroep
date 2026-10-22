/** Renders text where segments wrapped in ** are shown bold. */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-paper font-semibold">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
