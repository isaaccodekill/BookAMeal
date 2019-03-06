import Menu from '../models/menu';
import Meal from '../models/meal';
import Caterer from '../models/caterer';

class menuService {
  static getMenu(req, res, next) {
    Menu.findAll()
      .then((menu) => {
        res.status(200).json({
          status: 'successful',
          menu: menu[0],
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
        next();
      });
  }

  static createAndSaveMenu(req, res, next) {
    return Menu.create({
      // chefId: req.user.id,
      MenuItems: req.body.MenuItems,
    }, {
      include: [{
        model: Caterer,
      }],
    })
      .then((menu) => {
        res.status(200).json({
          status: 'successful',
          menu,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
        next();
      });
  }

  static editMenu(req, res, next) {
    return Menu.Update({
      // chefId: req.user.id,
      MenuItems: req.body.MenuItems,
    }, { where: { id: 1 } })
      .then((menu) => {
        res.status(200).json({
          status: 'successful',
          menu,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'unsuccesful',
          error,
        });
        next();
      });
  }
}

export default menuService;
