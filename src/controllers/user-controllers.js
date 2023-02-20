import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUsers = async (req,res,next) => {

  try {

    const allUsers = await prisma.user.findMany({
      include : {
        posts : true,
        profile : true
      }
    });
    res.status(200).send(allUsers)

  } catch (error) {

    res.status(500).send({ error : error});

  }

}

const createUser = async (req,res,next) => {

  const  { name, email,title, bio} = req.body
  
  try {

    await prisma.user.create({
      data: {
        name: name,
        email: email,
        posts: {
          create: { title: title },
        },
        profile: {
          create: { bio: bio },
        },
      },
    })
    res.status(200).send({ user : 'published'});

  } catch (error) {

    res.status(500).send({ error : error});

  }
}

const searchUser = async (req,res,next) => {

}
const editUser = async (req,res,next) => {

}
const deleteUser = async (req,res,next) => {

}

export { 
  getAllUsers, 
  createUser,
  searchUser,
  editUser,
  deleteUser
}