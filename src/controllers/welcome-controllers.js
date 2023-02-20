export async function msg (req,res,next) {
  return res.status(202).send({ message : "Hello" });
}
