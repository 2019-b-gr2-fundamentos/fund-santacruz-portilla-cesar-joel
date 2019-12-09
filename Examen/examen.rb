=begin
primero debemos definir todas las
funciones que estaremos usando para poder generar
la calculadora
=end
def sumar(numuno, numdos)
  numuno + numdos
end

def restar(numuno, numdos)
  numuno - numdos
end

def multiplicar(numuno, numdos)
  numuno * numdos
end

def dividir(numuno, numdos)
  numuno / numdos
end

def potencia(numuno)
  numuno * numuno
end

def area_circunferencia(numuno)
  3.1415 * (numuno ** 2)
end

def area_rectangulo(numuno, numdos)
  numuno * numdos
end

def area_triangulo(numuno, numdos)
  (numuno * numdos) / 2
end

def volumen_esfera(numuno)
  3.1415  * (numuno * numuno * numuno) * 1.3333
end

def borracho(numuno, numdos)
  numuno * numdos
end
=begin
Luego de definir todas las operaciones que realizara
la calculadora, lo siguiente a hacer es definir
como tal la funcion de la calculadora
=end
def calculadora()
  print "Escoja la operacion deseada"
  operacion = gets.to_i
  if operacion == 1
    print "numero1"
    numuno = gets.to_i
    print "numero2"
    numdos = gets.to_i
    puts "suma es #{sumar(numuno, numdos)}"
    calculadora
  else
    if operacion == 2
      print "numero1"
      numuno = gets.to_i
      print "numero2"
      numdos = gets.to_i
      puts "resta es #{restar(numuno, numdos)}"
      calculadora
    else
      if operacion == 3
        print "numero1"
        numuno = gets.to_i
        print "numero2"
        numdos = gets.to_i
        puts "multiplicacion es #{multiplicar(numuno, numdos)}"
        calculadora
      else
        if operacion == 4
          print "numero1"
          numuno = gets.to_i
          print "numero2"
          numdos = gets.to_i
          puts "dividir es #{dividir(numuno, numdos)}"
          calculadora
        else
          if operacion == 5
            print "numero1"
            numuno = gets.to_i
            puts "potencia es #{potencia(numuno)}"
            calculadora
          else
            if operacion == 6
              print "numero1"
              numuno = gets.to_i
              puts "area circunferencia es #{area_circunferencia(numuno)}"
              calculadora
            else
              if operacion == 7
                print "numero1"
                numuno = gets.to_i
                print "numero2"
                numdos = gets.to_i
                puts "area rectangulo es #{area_rectangulo(numuno, numdos)}"
                calculadora
              else
                if operacion == 8
                  print "numero1"
                  numuno = gets.to_i
                  print "numero2"
                  numdos = gets.to_i
                  puts "area triangulo es #{area_triangulo(numuno, numdos)}"
                  calculadora
                else
                  if operacion == 9
                    print "numero1"
                    numuno = gets.to_i
                    puts "volumen esfera es #{volumen_esfera(numuno)}"
                    calculadora
                  else
                    if operacion == 10
                      print "numero1"
                      numuno = gets.to_i
                      print "numero2"
                      numdos = gets.to_i
                      puts "% borracho es #{borracho(numuno, numdos)}"
                      calculadora
                    else
                      if operacion == 11
                        print "adios"
                      else
                      end
                    end
                  end
                end
              end
            end
          end
        end
      end
    end
  end
end

def main()
  calculadora
end
puts "#{main()}"
