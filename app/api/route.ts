
export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      status: "loading",
      message: "Meera Assistant is starting up...",
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
      status: 200,
    }
  );
}
