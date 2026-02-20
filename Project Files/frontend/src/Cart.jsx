import { useEffect, useState } from "react"

function Cart() {
  const [cart, setCart] = useState([])

  const user = JSON.parse(localStorage.getItem("user"))

  // ROLE PROTECTION
  if (user?.role !== "user") {
    return (
      <div className="container mt-5 text-center">
        <h3>Access Denied</h3>
        <p>Only users can access the cart</p>
      </div>
    )
  }

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(storedCart)
  }, [])

  const removeItem = (index) => {
    const updated = [...cart]
    updated.splice(index, 1)
    setCart(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
  }

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  )

  const buyNow = () => {
    alert("Order placed successfully 🎉")
    localStorage.removeItem("cart")
    setCart([])
  }

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="card p-3 mb-3" key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.title}</h5>
                  <p className="text-muted mb-1">{item.author}</p>
                  <span className="badge bg-success">${item.price}</span>
                </div>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <div className="card p-3 mt-3">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>

            <button className="btn btn-dark mt-2" onClick={buyNow}>
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart