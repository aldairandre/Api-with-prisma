import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUsers = async (req,res,next) => {

  try {

    const allUsers = await prisma.user.findMany({
      include : {
        posts : true,
      }
    });
    res.status(200).send(allUsers)

  } catch (error) {

    res.status(500).send({ error : error});

  }

}

const createUser = async (req,res,next) => {

  try {

    const  { name, email,title, posts } = req.body

    const user = {
      name: name,
      email: email,
      title : title,
      posts : {
        create : posts.create
      }
    }
    
    const result = await prisma.user.create({
      data: user
    })

    res.status(200).send({ 
      message : "Create user",
      user : result
    });

  } catch (error) {

    res.status(500).send({ error : error});

  }
}

const searchUser = async (req,res,next) => {
  
  try {
    
    const id_user = req.params.id;
    
    const user = await prisma.user.findUnique({ 
      where : { 
        id : Number(id_user)
      },
      include : {
        posts : true
      }
    });

    if(user === null) {
      return res.status(500).send({ message : "User not found"});
    }
    
    res.status(200).send({ user : user});
    
  } catch (error) {

    res.status(500).send({ 
      message : "Internal Server Error"
    });
    
  }

}

const deleteUser = async (req,res,next) => {
  
  try {
    
    const id_user = req.params.id;

    const deleteUser = await prisma.user.delete({ 
      where : { 
        id : Number(id_user)
      }
    });

    res.status(202).send({ 
      message : "User deleted",
      user : deleteUser
    });
  
  } catch (error) {

    res.status(500).send({ 
      message : "Internal Server Error"
    });
  
  }

}

/* const editUser = async (req,res,next) => {

} */

export { 
  getAllUsers, 
  createUser,
  searchUser,
  /* editUser, */
  deleteUser
}