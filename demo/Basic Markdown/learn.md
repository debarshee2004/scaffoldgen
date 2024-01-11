# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

`printf("Hello World);`

Patched issue no #17 in file `index.js` and `quary.js`.

```c
#include<stdio.h>

int main(){
    printf("Hello World");
}
```

```java
@Service
public class ItemService {
    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Optional<Item> getItemById(Long id) {
        return itemRepository.findById(id);
    }

    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
}
```

```diff
- print("Hello World")
+ printf("Hello World");
```

- [ ] Checkbox

- [x] Closed Checkbox

*Italic*

**Bold**

***Bold and Italic***

<u>Hello World</u>

