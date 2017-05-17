<?php

class Asfalto{

	public static function adicionar($latitudeInicial, $longitudeInicial, $latitudeFinal, $longitudeFinal){
		try{
            $sql = "insert into asfalto (latitude_inicial, longitude_inicial, latitude_final, longitude_final) values (:latitudeInicial, :longitudeInicial, :latitudeFinal, :longitudeFinal)";
            $p_sql = new PDO ('mysql:host=localhost;dbname=hiperlocal','root', 'teste321', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $p_sql->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $p_sql->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_EMPTY_STRING);
            $call = $p_sql->prepare($sql);
            $call->bindValue(':latitudeInicial', $latitudeInicial);
            $call->bindValue(':longitudeInicial', $longitudeInicial);
            $call->bindValue(':latitudeFinal', $latitudeFinal);
            $call->bindValue(':longitudeFinal', $longitudeFinal);
            $call->execute();
            $resposta = array(
                "status" => "ok",
                "mensagem" => "Dados enviados com sucesso!"
            );
            echo json_encode($resposta);
         }catch(Exception $e){
            $resposta = array(
                "status" => "erro",
                "mensagem" => $latitudeFinal
            );
            echo json_encode($resposta);
         }
	}

    public static function consultar(){
        try{
            $sql = "select * from asfalto";
            $p_sql = new PDO ('mysql:host=localhost;dbname=hiperlocal','root', 'teste321', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $p_sql->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $p_sql->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_EMPTY_STRING);
            $call = $p_sql->prepare($sql);
            $call->execute();
            $dados = array();
            while($row = $call->fetch(PDO::FETCH_ASSOC)){
                $dados[] = Self::montar($row);
            }
            $resposta = array(
                "status" => "ok",
                "dados" => $dados
            );
            echo json_encode($resposta, JSON_UNESCAPED_UNICODE);
            
        }catch (Exception $e){
            $resposta = array(
                "status" => "erro",
                "mensagem" => "Ocorreu um erro, tente novamente em instantes!"
            );
            echo json_encode($resposta);
        }
    }

    public static function montar($row){
        $denuncia = array(
            "id" => $row['id'],
            "latitude" => $row['latitude'],
            "longitude" => $row['longitude'],
            "encanada" => $row['encanada'],
            "poco" => $row['poco'],
            "tipo_poco" => $row['tipo_poco']
        );

        return $denuncia;
    } 

}

?>