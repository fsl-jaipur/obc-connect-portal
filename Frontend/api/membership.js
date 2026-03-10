export default async function handler(req, res) {

    if (req.method === "POST") {
  
      const data = req.body;
  
      console.log("Form Data:", data);
  
      return res.status(200).json({
        success: true,
        message: "Data received successfully",
        data: data
      });
    }
  
    res.status(405).json({ message: "Method Not Allowed" });
  
  }