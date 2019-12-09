def imprimir(array)
  for i in 0..array.length do
    puts "dato: "array[i], " ,posicion: ", i
  end
  return
end
def actualizar(array)
  puts "Ingrese un valor a agregar"
  temp = gets
  puts "Ingrese la posicion"
  posicion = gets
  array.insert(posicion,temp)
  puts "arreglo actualizado"
  imprimir(array)
  return
end
def crear(array)
  puts "ingrese un valor a agregar"
  temp = gets
  array.insert(array.length(),temp)
  return
end
def eliminar(array)
  puts "ingrese la posicion a eliminar"
  posicion = gets
  for i in posicion..array.length do
    array[i] = array[i+1]
  end
  array.pop
  return
end
def main()
  array = []
  puts "escoja una opcion crear[1], eliminar elemento[2] o actualizar[3]"
  opcion = gets
  es_crear = opcion == "1" || opcion == "crear[1]" || opcion == "crear"
  es_eliminar = opcion == "2" || opcion == "eliminar elemento[2]" || opcion == "eliminar elemento"
  es_actualizar = opcion == "3" || opcion == "actualizar[3]" || opcion == "actualizar"
  if es_crear
    crear(array)
  end
  if es_elemento

  end
  if es_actualizar
  end
end