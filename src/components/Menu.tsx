function Menu() {
  return (
    <>
      <section className="bg-danger text-light p-2 text-center">
        <h2>Menu</h2>
        <p className="mb-0">
          Be advised that our products may contain food allergies
        </p>
        <p className="mb-0">
          Some items may not be available during the winter
        </p>
      </section>

      <section className="bg-light text-dark" id="menu">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm">
              <h3 className="mt-5">PIZZA</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <p className="lead">
                16” Large Cheese<span>$17.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">Grandma Pizza</p>
              <p className="text-muted">
                Thin crust Sicilian<span>$25.99</span>
              </p>
            </div>
          </div>

          <hr />
          <h3>PIZZA TOPPINGS</h3>
          <p className="">
            <strong className="text-danger">$3 Each:</strong> Sausage,
            Pepperoni, Meatball, Ham, Mushroom, Peppers, Onion, Olives,
            Broccoli, Fresh Garlic, Fresh Tomatoes, Hot Peppers, and Extra
            Cheese
          </p>
          <p>
            <strong className="text-danger">$6 Each:</strong> Bacon, Eggplant,
            Pineapple, and Ricotta Cheese
          </p>
          <hr />

          <h3>GOURMET PIZZA</h3>
          <h6 className="mb-5">16” Large $25.99</h6>
          <div className="row">
            <div className="col-sm">
              <p className="lead">Veggie</p>
              <p className="text-muted">
                Broccoli, ricotta, bruschetta tomatoes & Mozzarella. No sauce
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">Margherita Pizza</p>
              <p className="text-muted">Fresh mozzarella and basil</p>
            </div>
            <div className="col-sm">
              <p className="lead">Buffalo Chicken</p>
              <p className="text-muted"></p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <p className="lead">Chicken Parmigiana</p>
              <p className="text-muted"></p>
            </div>
            <div className="col-sm">
              <p className="lead">Bacon Chicken Ranch</p>
              <p className="text-muted"></p>
            </div>
            <div className="col-sm">
              <p className="lead">Hawaiian</p>
              <p className="text-muted">Ham, pineapple & mozzarella</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <p className="lead">Pizza Bianca</p>
              <p className="text-muted">
                Ricotta & mozzarella with or without garlic. No sauce
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">Meatlovers</p>
              <p className="text-muted">
                Sausage, pepperoni, bacon & extra cheese
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">Surf Special</p>
              <p className="text-muted">
                Sausage, peppers, onions & extra cheese
              </p>
            </div>
          </div>
          <hr />

          <h3>CALZONES & STROMBOLIS</h3>
          <h6 className="mb-5">
            Create your own Calzone or Stromboli using the Pizza Topping List
            $3.00 Each
          </h6>
          <div className="row">
            <div className="col-lg">
              <p className="lead">
                Ricotta & Mozzarella Calzone<span>$22.99</span>
              </p>
              <p className="text-muted"></p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Mozzarella & Sauce Stromboli<span>$17.99</span>
              </p>
              <p className="text-muted"></p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Steak or Chicken Stromboli<span>$25.99</span>
              </p>
              <p className="text-muted"></p>
            </div>
          </div>
          <hr />

          <h3>HOT SUBS</h3>
          <h6 className="mb-5">Served on 12” Bread for $10.99</h6>
          <div className="row">
            <div className="col-sm">
              <p className="lead">Eggplant Parmigiana</p>
            </div>
            <div className="col-sm">
              <p className="lead">Veggie Sub</p>
              <p className="text-muted">Broccoli, tomatoes & mozzarella</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <p className="lead">Chicken Parmigiana</p>
            </div>
            <div className="col-sm">
              <p className="lead">Meatball Parmigiana</p>
            </div>
            <div className="col-sm">
              <p className="lead">Sausage Parmigiana</p>
            </div>
          </div>
          <hr />

          <h3>COLD SUBS</h3>
          <h6 className="mb-5">Served on 12” Bread for $10.99</h6>
          <div className="row">
            <div className="col-sm">
              <p className="lead">Italian Sub</p>
              <p className="text-muted">Ham, salami, and provolone</p>
            </div>
            <div className="col-sm">
              <p className="lead">Ham & Cheese Sub</p>
            </div>
            <div className="col-sm">
              <p className="lead">Turkey Sub</p>
              <p className="text-muted">Add Cheese $1 Extra</p>
            </div>
          </div>
          <hr />

          <h3>STEAK OR CHICKEN CHEESESTEAK</h3>
          <h6 className="mb-5">Served on 12” Bread for $10.99</h6>
          <div className="row">
            <div className="col-sm">
              <p className="lead">Cheesesteak</p>
            </div>
            <div className="col-sm">
              <p className="lead">Chicken Cheesesteak</p>
            </div>
            <div className="col-sm">
              <p className="lead">Pizza Steak</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <p className="lead">Cheesesteak Hoagie</p>
              <p className="text-muted">Lettuce, tomatoes & onions</p>
            </div>
            <div className="col-sm">
              <p className="lead">Special Cheesesteak</p>
              <p className="text-muted">Peppers, mushrooms & onions</p>
            </div>
            <div className="col-sm">
              <p className="lead">Buffalo Chicken Cheesesteak</p>
            </div>
          </div>
          <hr />

          <h3>CHICKEN WINGS</h3>
          <h6 className="mb-5">
            Wings served with hot sauce and blue cheese on the side
          </h6>
          <div className="row">
            <div className="col-sm">
              <p className="lead">
                9 Wings<span>$12.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                12 Wings<span>$16.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                18 Wings<span>$24.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                24 Wings<span>$32.99</span>
              </p>
            </div>
          </div>
          <hr />

          <h3>TENDERS</h3>
          <h6 className="mb-5">
            Tenders served with honey mustard on the side
          </h6>
          <div className="row">
            <div className="col-sm">
              <p className="lead">
                6 Tenders<span>$10.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                9 Tenders<span>$15.99</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <p className="lead">
                12 Tenders<span>$19.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                18 Tenders<span>$28.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                24 Tenders<span>$37.99</span>
              </p>
            </div>
          </div>
          <hr />

          <h3>WRAPS</h3>
          <h6 className="mb-5">Served with a side of fries for $12.99</h6>
          <div className="row">
            <div className="col-sm">
              <p className="lead">Buffalo Chicken</p>
              <p className="text-muted">
                Chicken, hot sauce, blue cheese & american cheese
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">Chicken Caesar</p>
              <p className="text-muted">
                Grilled chicken, romaine lettuce, tomatoes & caesar dressing
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <p className="lead">Chicken Ranch Wrap</p>
              <p className="text-muted">
                Breaded chicken, lettuce, tomatoes & ranch dressing
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">Veggie Wrap</p>
              <p className="text-muted">
                Broccoli, bruschetta tomatoes & mozzarella
              </p>
            </div>
          </div>
          <hr />

          <h3>PASTA & ENTREES</h3>
          <h6 className="mb-5">Served with salad</h6>
          <div className="row">
            <div className="col-sm">
              <p className="lead">
                Spaghetti or Penne <br /> & Tomato Sauce<span>$11.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Spaghetti or Penne <br /> & Meatball or Sausage
                <span>$15.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Penne Alla Vodka<span>$15.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Penne Alla Vodka <br /> & Chicken<span>$18.99</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <p className="lead">
                Chicken Parmigiana <br /> & pasta<span>$19.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Eggplant Parmigiana <br /> & pasta<span>$18.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Eggplant Rollatini <br /> & pasta<span>$19.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Mussels Marinara <br /> over Spaghetti<span>$18.99</span>
              </p>
            </div>
          </div>
          <hr />
          <h3>APPETIZERS</h3>
          <h6 className="mb-5">$13.99</h6>
          <div className="row">
            <div className="col-sm">
              <p className="lead">Mussels Marinara</p>
              <p className="text-muted">Hot or mild</p>
            </div>
            <div className="col-sm">
              <p className="lead">Eggplant Rollatini</p>
              <p className="text-muted">
                Stuffed eggplant with ricotta & mozzarella
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">Fried Calamari</p>
              <p className="text-muted">Served with a side of sauce</p>
            </div>
          </div>
          <hr />

          <h3>SALAD</h3>
          <div className="row">
            <div className="col-sm">
              <p className="lead">
                Garden Salad<span>$8.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Grilled, Fried, or Buffalo Chicken<span>$12.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">Antipasto Salad</p>
              <p className="text-muted">
                Ham, salami & provolone<span>$12.99</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <p className="lead">Chef Salad</p>
              <p className="text-muted">
                Turkey & provolone<span>$12.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">Caesar Salad</p>
              <p className="text-muted">
                Romaine lettuce, croutons & Romano cheese
                <span>$8.99 | $12.99 w/chicken</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">Caprese Salad</p>
              <p className="text-muted">
                Fresh mozzarella, roasted peppers, tomatoes, olives and basil
                <span>$13.99</span>
              </p>
            </div>
          </div>
          <hr />
          <h3>SIDES</h3>
          <div className="row">
            <div className="col-sm">
              <p className="lead">
                Fries<span>$5.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Cheese Fries<span>$6.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Onion Rings<span>$6.99</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <p className="lead">
                Mozzarella Sticks (6)<span>$8.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Meatballs (3)<span>$5.99</span>
              </p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Garlic Bread<span>$5.99 | $6.99 w/cheese</span>
              </p>
            </div>
          </div>
          <hr />

          <h3>KIDS MENU</h3>
          <h6 className="mb-5">$6.99</h6>
          <div className="row">
            <div className="col-sm">
              <p className="lead">Chicken Tenders & Fries</p>
            </div>
            <div className="col-sm">
              <p className="lead">
                Ziti with Sauce or Butter
                <span>$6.99 | $1 Extra for Meatball</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
