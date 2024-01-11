import tkinter as tk
from tkinter import END,messagebox
import random,json

window = tk.Tk()
window.title('Password Manager')
window.config(padx=20,pady=20)

def store_in_file():
    wb = webtext.get()
    eu = euntext.get()
    pw = passtext.get()

    data = {
        webtext.get():{
            "Email":eu,
            "Password":pw
        }
    }

    if(wb == '' or eu == '' or pw == ''):
        messagebox.showerror(title='Error',message='Please enter all the fields')

    else:
        is_ok = messagebox.askokcancel(title='Save Password',message='Are the details ok?')

        if (is_ok):
            try:
                with open('opensource_guide\projects\Sangneel_Deb password generator and tracker\storefile.json',mode='r') as file:
                    d = json.load(file)
                    d.update(data)

            except:
                with open('opensource_guide\projects\Sangneel_Deb password generator and tracker\storefile.json',mode='w') as file:
                    json.dump(data,file,indent=4)

            else:
                with open('opensource_guide\projects\Sangneel_Deb password generator and tracker\storefile.json',mode='w') as file:
                    json.dump(d,file,indent=4)
            
            webtext.delete(0, END)
            euntext.delete(0, END)
            passtext.delete(0, END)
            messagebox.showinfo(title='Info',message=f"{wb} has been added to storefile")


def gen_pass():
    A_LIST = ['A', 'B', 'C','D', 'E', 'F', 'G', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    a_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z']
    num_list = ['0', '1', '2', '3', '4','5', '6', '7', '8', '9']
    spchar_list = ['!', '@', '#%', '&', '*', '_', '-', '+', '/']
    pas = ""
    for i in range(3):
        pas += random.choice(a_list)
        pas += random.choice(A_LIST)

    for i in range(2):
        pas += random.choice(num_list)
        pas += random.choice(spchar_list)

    pascopy = ''.join(random.sample(pas,len(pas)))
    passtext.delete(0,END)
    passtext.insert(0,pascopy)

def search_web():
    wb = webtext.get()
    eu = euntext.get()
    pw = passtext.get()
    try:
        with open('opensource_guide\projects\Sangneel_Deb password generator and tracker\storefile.json',mode='r') as file:
            d = json.load(file)
    except:
        messagebox.showerror(title='Warning',message='No such details exist')
    else:
        if (wb in d):    
            messagebox.showinfo(title='Info',message=f"Details:\nWebsite - {wb}\nEmail/Username - {d[wb]['Email']}\nPassword - {d[wb]['Password']}")
        else:
            messagebox.showerror(title='Error',message='No such details exist')

cnv = tk.Canvas(height=200,width = 200)
photo = tk.PhotoImage(file='opensource_guide\projects\Sangneel_Deb password generator and tracker\password.png')
cnv.create_image(100,100,image=photo)
cnv.grid(row = 1, column = 1)

lab = tk.Label(text='Password',font=('goudy stout',20,'bold'))
lab.grid(row = 1, column = 2)

website = tk.Label(text='Website:',font=('Arial',15,'normal'))
website.grid(row = 2, column = 0)

eun = tk.Label(text='Email/Username:',font=('Arial',15,'normal'))
eun.grid(row = 3, column = 0)

password = tk.Label(text='Password:',font=('Arial',15,'normal'))
password.grid(row = 4, column = 0)

webtext = tk.Entry(width=35)
webtext.focus()
webtext.grid(row = 2, column =1,columnspan=2)

euntext = tk.Entry(width=35)
euntext.grid(row = 3, column =1,columnspan=2)

passtext = tk.Entry(width=35)
passtext.grid(row = 4, column =1,columnspan=2)

button1 = tk.Button(text='Generate Password:',font=('Arial',10,'normal'),command=gen_pass)
button1.grid(row = 4, column = 3)

button2 = tk.Button(text='Add',font=('Arial',10,'normal'),width=36,command=store_in_file)
button2.grid(row = 5, column = 1,columnspan=2)

button3 = tk.Button(text='Search',font=('Arial',10,'normal'),command=search_web)
button3.grid(row = 2, column = 3)




window.mainloop()





