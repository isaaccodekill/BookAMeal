import Menu from '../models/menu';
import Caterer from '../models/caterer';
import Meal from '../models/meal';
import populate from '../Extras/populate';

class menuService {
  static getMenu(req, res) {
    let currentMenu = null;
    Menu.findAll({ where: { CatererId: req.params.chefId } }, { include: [Caterer] })
      .then((menu) => {
        //
        currentMenu = menu;
      })
      .then(() => {
        return populate(Meal, currentMenu[0].MenuItems, 'name,price,id');
      })
      // .then(items => console.log('Items", items))
      .then(menuItems => res.status(200).json({
        status: 'successful',
        menu: currentMenu[0],
        meals: menuItems,
      }))
      .catch(error => res.status(400).json({
        status: 'unsuccesful',
        error,
      }));
  }

  static createAndSaveMenu(req, res) {
    Menu.create({
      CatererId: req.caterer.id,
      MenuItems: req.body.MenuItems,
    }, {
      include: [{
        model: Caterer,
      }],
    })
      .then(menu => res.status(200).json({
        status: 'successful',
        menu,
      }))
      .catch(error => res.status(400).json({
        status: 'unsuccesful',
        error,
      }));
  }

  static editMenu(req, res) {
    Menu.update({
      MenuItems: req.body.MenuItems,
    }, { where: { CatererId: req.caterer.id } })
      .then((menu) => {
        return res.status(200).json({
          status: 'successful',
          message: 'menu was edited',
          menu,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          status: 'unsuccesful',
          error,
        });
      });
  }
}

export default menuService;
