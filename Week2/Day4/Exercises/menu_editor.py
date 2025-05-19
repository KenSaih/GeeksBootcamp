from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("MENU EDITOR")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Full Menu")
        print("(X) Exit")

        option = input ('choose an option : ').upper()


        if option == 'V' :
            name = input('enter the item name : ')
            item = MenuManager.get_by_name(name)
            if item :
                print(f'item found : {item}')
            else :
                print ('item not found')
        
        elif option == 'A':
            add_item_to_menu()
        elif option == 'D':
            remove_item_from_menu()
        elif option == 'U':
            update_item_from_menu()
        elif option == 'S':
            show_restaurant_menu()
        elif option == 'X':
            print("exiting program,final menu:")
            show_restaurant_menu()
            break
        else:
            print("invalid choice try again")

def add_item_to_menu():
    name = input('enter the new item name : ' )
    try:
        price = int(input("enter the item price: "))
        item = MenuItem(name , price)
        item.save()
        print('item added!!')
    except Exception as e:
        print(f"error adding item: {e}")

def remove_item_from_menu() :
    name = input('enter the item name to remove :')
    result = MenuManager.get_by_name(name)

    if not result:
        print('rrror item not found')
        return
    
    item = MenuItem(result[1], result[2])  #[1] is name/[2] is price

    item.delete()
    print('item deleted!!')

def update_item_from_menu():
    oldname = input ('enter the current item name : ')
    result = MenuManager.get_by_name(oldname)
    if not result :
        print ('error item not found')
        return
    olditem = MenuItem(result[1], result[2])
    newname = input ('enter the new item name : ')
    try :
        new_price = int(input('enter the new price : '))
        olditem.update(newname, new_price)
        print('item updated!!')
    except Exception as e:
        print (f"error updating item: {e}")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if items :
        print('Restaurant Menu')
        for i in items :
            print(i)
    else :
        print('the menu is empty')


if __name__ == '__main__':
    show_user_menu()