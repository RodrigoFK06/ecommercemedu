import { bootstrap } from "../index"

void (async () => {
  const container = await bootstrap()

  const userService = container.resolve("userService") as any

  const email = "admin@medusa-test.com"
  const password = "supersecure123"

  const existing = await userService.list({ email })

  if (existing.length > 0) {
    console.log("⚠️  El usuario ya existe")
    return
  }

  await userService.create({
    email,
    password,
    first_name: "Admin",
    last_name: "Medusa",
  })

  console.log("✅ Admin creado exitosamente")
})()
